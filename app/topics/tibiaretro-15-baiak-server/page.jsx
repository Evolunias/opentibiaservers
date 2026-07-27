import Tibiaretro15BaiakServerKeywordPage, { generateMetadata } from './tibiaretro-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15BaiakServerKeywordPage />;
}
