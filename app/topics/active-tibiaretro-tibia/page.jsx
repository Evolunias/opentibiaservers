import ActiveTibiaretroTibiaKeywordPage, { generateMetadata } from './active-tibiaretro-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroTibiaKeywordPage />;
}
