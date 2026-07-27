import PvpThaisotServerKeywordPage, { generateMetadata } from './pvp-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpThaisotServerKeywordPage />;
}
