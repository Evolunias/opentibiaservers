import Tibiaretro84BaiakServerKeywordPage, { generateMetadata } from './tibiaretro-8-4-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro84BaiakServerKeywordPage />;
}
