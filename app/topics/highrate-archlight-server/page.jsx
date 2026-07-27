import HighrateArchlightServerKeywordPage, { generateMetadata } from './highrate-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightServerKeywordPage />;
}
