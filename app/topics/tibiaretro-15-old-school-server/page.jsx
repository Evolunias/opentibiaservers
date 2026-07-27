import Tibiaretro15OldSchoolServerKeywordPage, { generateMetadata } from './tibiaretro-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15OldSchoolServerKeywordPage />;
}
