import Tibiascape13BaiakServerKeywordPage, { generateMetadata } from './tibiascape-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13BaiakServerKeywordPage />;
}
