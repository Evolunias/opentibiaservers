import LowrateArchlightOtServerKeywordPage, { generateMetadata } from './lowrate-archlight-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightOtServerKeywordPage />;
}
