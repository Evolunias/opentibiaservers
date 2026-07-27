import Tibiascape14BaiakServerKeywordPage, { generateMetadata } from './tibiascape-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape14BaiakServerKeywordPage />;
}
