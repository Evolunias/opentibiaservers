import LowrateTibiaretroOtServerKeywordPage, { generateMetadata } from './lowrate-tibiaretro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroOtServerKeywordPage />;
}
