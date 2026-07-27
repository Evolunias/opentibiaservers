import Tibiaretro80OldSchoolServerKeywordPage, { generateMetadata } from './tibiaretro-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro80OldSchoolServerKeywordPage />;
}
