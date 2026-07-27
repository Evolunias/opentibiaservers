import BestTibiaraOfficialKeywordPage, { generateMetadata } from './best-tibiara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraOfficialKeywordPage />;
}
