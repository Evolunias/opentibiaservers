import Tibiaretro12BaiakServerKeywordPage, { generateMetadata } from './tibiaretro-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12BaiakServerKeywordPage />;
}
