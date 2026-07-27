import Tibiaretro14BaiakServerKeywordPage, { generateMetadata } from './tibiaretro-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro14BaiakServerKeywordPage />;
}
