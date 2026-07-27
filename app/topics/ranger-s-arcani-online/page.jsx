import RangerSArcaniOnlineKeywordPage, { generateMetadata } from './ranger-s-arcani-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniOnlineKeywordPage />;
}
