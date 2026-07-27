import ForteraOpenPvpKeywordPage, { generateMetadata } from './fortera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraOpenPvpKeywordPage />;
}
