import Tibiascape71BaiakServerKeywordPage, { generateMetadata } from './tibiascape-7-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape71BaiakServerKeywordPage />;
}
