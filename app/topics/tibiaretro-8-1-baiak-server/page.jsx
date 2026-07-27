import Tibiaretro81BaiakServerKeywordPage, { generateMetadata } from './tibiaretro-8-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro81BaiakServerKeywordPage />;
}
