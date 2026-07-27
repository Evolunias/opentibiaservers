import PvpOriginaltibiaServerKeywordPage, { generateMetadata } from './pvp-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOriginaltibiaServerKeywordPage />;
}
