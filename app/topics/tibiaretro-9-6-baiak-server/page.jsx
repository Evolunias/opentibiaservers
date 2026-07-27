import Tibiaretro96BaiakServerKeywordPage, { generateMetadata } from './tibiaretro-9-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro96BaiakServerKeywordPage />;
}
