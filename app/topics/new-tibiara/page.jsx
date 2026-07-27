import NewTibiaraKeywordPage, { generateMetadata } from './new-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraKeywordPage />;
}
