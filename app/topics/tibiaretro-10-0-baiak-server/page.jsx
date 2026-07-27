import Tibiaretro100BaiakServerKeywordPage, { generateMetadata } from './tibiaretro-10-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro100BaiakServerKeywordPage />;
}
