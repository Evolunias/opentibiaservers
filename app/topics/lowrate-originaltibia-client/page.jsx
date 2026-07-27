import LowrateOriginaltibiaClientKeywordPage, { generateMetadata } from './lowrate-originaltibia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOriginaltibiaClientKeywordPage />;
}
