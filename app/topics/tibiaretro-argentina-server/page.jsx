import TibiaretroArgentinaServerKeywordPage, { generateMetadata } from './tibiaretro-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroArgentinaServerKeywordPage />;
}
