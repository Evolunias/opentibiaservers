import LowrateArchlightLoginKeywordPage, { generateMetadata } from './lowrate-archlight-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightLoginKeywordPage />;
}
