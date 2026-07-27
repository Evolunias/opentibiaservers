import HighrateArchlightClientKeywordPage, { generateMetadata } from './highrate-archlight-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightClientKeywordPage />;
}
