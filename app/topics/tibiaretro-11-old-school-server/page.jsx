import Tibiaretro11OldSchoolServerKeywordPage, { generateMetadata } from './tibiaretro-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11OldSchoolServerKeywordPage />;
}
