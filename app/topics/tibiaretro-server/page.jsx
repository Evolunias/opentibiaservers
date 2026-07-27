import TibiaretroServerKeywordPage, { generateMetadata } from './tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroServerKeywordPage />;
}
