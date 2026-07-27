import CurrentClassickDrakoriaServerKeywordPage, { generateMetadata } from './current-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassickDrakoriaServerKeywordPage />;
}
