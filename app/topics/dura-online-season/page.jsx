import DuraOnlineSeasonKeywordPage, { generateMetadata } from './dura-online-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonKeywordPage />;
}
