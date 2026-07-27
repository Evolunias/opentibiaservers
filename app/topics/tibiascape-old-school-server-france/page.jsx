import TibiascapeOldSchoolServerFranceKeywordPage, { generateMetadata } from './tibiascape-old-school-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeOldSchoolServerFranceKeywordPage />;
}
