import ActiveTibiaretroOpenTibiaKeywordPage, { generateMetadata } from './active-tibiaretro-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroOpenTibiaKeywordPage />;
}
