import LowrateArchlightClientKeywordPage, { generateMetadata } from './lowrate-archlight-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightClientKeywordPage />;
}
