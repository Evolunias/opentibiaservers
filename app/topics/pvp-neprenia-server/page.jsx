import PvpNepreniaServerKeywordPage, { generateMetadata } from './pvp-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpNepreniaServerKeywordPage />;
}
