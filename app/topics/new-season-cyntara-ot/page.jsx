import NewSeasonCyntaraOtKeywordPage, { generateMetadata } from './new-season-cyntara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraOtKeywordPage />;
}
