import PvpeOriginaltibiaServerKeywordPage, { generateMetadata } from './pvpe-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeOriginaltibiaServerKeywordPage />;
}
