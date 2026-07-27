import NewSeasonCyntaraClientKeywordPage, { generateMetadata } from './new-season-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraClientKeywordPage />;
}
