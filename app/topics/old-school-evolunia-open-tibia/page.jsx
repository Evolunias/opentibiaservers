import OldSchoolEvoluniaOpenTibiaKeywordPage, { generateMetadata } from './old-school-evolunia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaOpenTibiaKeywordPage />;
}
