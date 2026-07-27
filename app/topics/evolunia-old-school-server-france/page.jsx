import EvoluniaOldSchoolServerFranceKeywordPage, { generateMetadata } from './evolunia-old-school-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaOldSchoolServerFranceKeywordPage />;
}
