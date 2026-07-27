import LumineraOldSchoolServerFranceKeywordPage, { generateMetadata } from './luminera-old-school-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraOldSchoolServerFranceKeywordPage />;
}
