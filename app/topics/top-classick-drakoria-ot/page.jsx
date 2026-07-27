import TopClassickDrakoriaOtKeywordPage, { generateMetadata } from './top-classick-drakoria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassickDrakoriaOtKeywordPage />;
}
