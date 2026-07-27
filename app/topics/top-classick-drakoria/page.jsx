import TopClassickDrakoriaKeywordPage, { generateMetadata } from './top-classick-drakoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassickDrakoriaKeywordPage />;
}
