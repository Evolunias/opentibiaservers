import NepreniaPvpKeywordPage, { generateMetadata } from './neprenia-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPvpKeywordPage />;
}
