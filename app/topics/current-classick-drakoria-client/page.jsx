import CurrentClassickDrakoriaClientKeywordPage, { generateMetadata } from './current-classick-drakoria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassickDrakoriaClientKeywordPage />;
}
