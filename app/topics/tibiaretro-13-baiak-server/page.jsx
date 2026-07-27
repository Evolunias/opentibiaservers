import Tibiaretro13BaiakServerKeywordPage, { generateMetadata } from './tibiaretro-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13BaiakServerKeywordPage />;
}
