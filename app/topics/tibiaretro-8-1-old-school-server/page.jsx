import Tibiaretro81OldSchoolServerKeywordPage, { generateMetadata } from './tibiaretro-8-1-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro81OldSchoolServerKeywordPage />;
}
