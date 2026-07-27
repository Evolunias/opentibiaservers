import OtServerListSeasonKeywordPage, { generateMetadata } from './ot-server-list-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListSeasonKeywordPage />;
}
