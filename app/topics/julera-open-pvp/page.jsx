import JuleraOpenPvpKeywordPage, { generateMetadata } from './julera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JuleraOpenPvpKeywordPage />;
}
