import FideraOpenPvpKeywordPage, { generateMetadata } from './fidera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraOpenPvpKeywordPage />;
}
