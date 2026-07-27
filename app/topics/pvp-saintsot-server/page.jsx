import PvpSaintsotServerKeywordPage, { generateMetadata } from './pvp-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSaintsotServerKeywordPage />;
}
