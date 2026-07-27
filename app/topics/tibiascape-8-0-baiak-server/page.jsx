import Tibiascape80BaiakServerKeywordPage, { generateMetadata } from './tibiascape-8-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80BaiakServerKeywordPage />;
}
