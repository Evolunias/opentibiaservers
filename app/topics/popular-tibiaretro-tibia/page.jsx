import PopularTibiaretroTibiaKeywordPage, { generateMetadata } from './popular-tibiaretro-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaretroTibiaKeywordPage />;
}
