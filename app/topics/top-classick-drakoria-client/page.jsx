import TopClassickDrakoriaClientKeywordPage, { generateMetadata } from './top-classick-drakoria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassickDrakoriaClientKeywordPage />;
}
