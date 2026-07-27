import Tibiaretro86BaiakServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86BaiakServerKeywordPage />;
}
