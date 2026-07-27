import Tibiascape15BaiakServerKeywordPage, { generateMetadata } from './tibiascape-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15BaiakServerKeywordPage />;
}
