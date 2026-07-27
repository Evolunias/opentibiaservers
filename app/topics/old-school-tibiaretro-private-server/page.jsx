import OldSchoolTibiaretroPrivateServerKeywordPage, { generateMetadata } from './old-school-tibiaretro-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroPrivateServerKeywordPage />;
}
