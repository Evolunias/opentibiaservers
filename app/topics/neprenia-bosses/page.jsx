import NepreniaBossesKeywordPage, { generateMetadata } from './neprenia-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaBossesKeywordPage />;
}
