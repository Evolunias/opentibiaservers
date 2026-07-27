import TopClassickDrakoriaServerKeywordPage, { generateMetadata } from './top-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassickDrakoriaServerKeywordPage />;
}
