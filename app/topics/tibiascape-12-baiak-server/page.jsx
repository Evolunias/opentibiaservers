import Tibiascape12BaiakServerKeywordPage, { generateMetadata } from './tibiascape-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12BaiakServerKeywordPage />;
}
