import PopularTibiaretroOpenTibiaKeywordPage, { generateMetadata } from './popular-tibiaretro-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaretroOpenTibiaKeywordPage />;
}
