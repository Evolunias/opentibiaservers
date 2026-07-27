import NewSeasonCyntaraOtsKeywordPage, { generateMetadata } from './new-season-cyntara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraOtsKeywordPage />;
}
