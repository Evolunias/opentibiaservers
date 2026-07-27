import PopularTibiaretroPrivateServerKeywordPage, { generateMetadata } from './popular-tibiaretro-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaretroPrivateServerKeywordPage />;
}
