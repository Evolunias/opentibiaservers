import Tibiaretro13OldSchoolServerKeywordPage, { generateMetadata } from './tibiaretro-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13OldSchoolServerKeywordPage />;
}
