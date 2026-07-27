import PopularTibiaretroServerKeywordPage, { generateMetadata } from './popular-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaretroServerKeywordPage />;
}
