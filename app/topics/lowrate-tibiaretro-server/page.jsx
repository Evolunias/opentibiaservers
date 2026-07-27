import LowrateTibiaretroServerKeywordPage, { generateMetadata } from './lowrate-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroServerKeywordPage />;
}
