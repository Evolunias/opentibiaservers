import TopTibiaretroTibiaKeywordPage, { generateMetadata } from './top-tibiaretro-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaretroTibiaKeywordPage />;
}
