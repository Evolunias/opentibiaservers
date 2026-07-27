import PopularTibiaretroKeywordPage, { generateMetadata } from './popular-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaretroKeywordPage />;
}
