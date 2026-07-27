import LowrateArchlightServerKeywordPage, { generateMetadata } from './lowrate-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightServerKeywordPage />;
}
