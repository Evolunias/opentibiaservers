import Tibiaretro12OldSchoolServerKeywordPage, { generateMetadata } from './tibiaretro-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12OldSchoolServerKeywordPage />;
}
