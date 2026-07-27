import NewClassickDrakoriaServerKeywordPage, { generateMetadata } from './new-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassickDrakoriaServerKeywordPage />;
}
