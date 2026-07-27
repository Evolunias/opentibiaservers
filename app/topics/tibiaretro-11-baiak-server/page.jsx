import Tibiaretro11BaiakServerKeywordPage, { generateMetadata } from './tibiaretro-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11BaiakServerKeywordPage />;
}
