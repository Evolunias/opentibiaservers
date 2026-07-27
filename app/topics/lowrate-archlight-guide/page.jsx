import LowrateArchlightGuideKeywordPage, { generateMetadata } from './lowrate-archlight-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightGuideKeywordPage />;
}
