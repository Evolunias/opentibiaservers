import PytheraOpenPvpKeywordPage, { generateMetadata } from './pythera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraOpenPvpKeywordPage />;
}
