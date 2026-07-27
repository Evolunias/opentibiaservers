import Tibiascape11BaiakServerKeywordPage, { generateMetadata } from './tibiascape-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11BaiakServerKeywordPage />;
}
