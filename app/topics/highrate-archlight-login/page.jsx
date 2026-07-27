import HighrateArchlightLoginKeywordPage, { generateMetadata } from './highrate-archlight-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightLoginKeywordPage />;
}
