import TibiaretroGermanyServerKeywordPage, { generateMetadata } from './tibiaretro-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroGermanyServerKeywordPage />;
}
