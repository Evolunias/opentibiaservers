import ShiveraOpenPvpKeywordPage, { generateMetadata } from './shivera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShiveraOpenPvpKeywordPage />;
}
