import MediviaBossesKeywordPage, { generateMetadata } from './medivia-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaBossesKeywordPage />;
}
