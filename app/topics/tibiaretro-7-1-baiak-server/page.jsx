import Tibiaretro71BaiakServerKeywordPage, { generateMetadata } from './tibiaretro-7-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro71BaiakServerKeywordPage />;
}
