import BaiakTibiaretroServerKeywordPage, { generateMetadata } from './baiak-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakTibiaretroServerKeywordPage />;
}
