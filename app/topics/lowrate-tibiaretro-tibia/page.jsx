import LowrateTibiaretroTibiaKeywordPage, { generateMetadata } from './lowrate-tibiaretro-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroTibiaKeywordPage />;
}
