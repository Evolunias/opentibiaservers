import DuraOnline14SeasonalServerKeywordPage, { generateMetadata } from './dura-online-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline14SeasonalServerKeywordPage />;
}
