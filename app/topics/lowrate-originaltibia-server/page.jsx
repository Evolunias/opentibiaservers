import LowrateOriginaltibiaServerKeywordPage, { generateMetadata } from './lowrate-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOriginaltibiaServerKeywordPage />;
}
