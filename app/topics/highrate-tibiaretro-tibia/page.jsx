import HighrateTibiaretroTibiaKeywordPage, { generateMetadata } from './highrate-tibiaretro-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroTibiaKeywordPage />;
}
