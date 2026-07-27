import NewSeasonCyntaraKeywordPage, { generateMetadata } from './new-season-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraKeywordPage />;
}
