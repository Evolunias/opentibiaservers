import NewSeasonCyntaraOtServerKeywordPage, { generateMetadata } from './new-season-cyntara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraOtServerKeywordPage />;
}
