import HighrateArchlightGuideKeywordPage, { generateMetadata } from './highrate-archlight-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightGuideKeywordPage />;
}
