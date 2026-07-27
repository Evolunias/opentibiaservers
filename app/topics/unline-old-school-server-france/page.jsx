import UnlineOldSchoolServerFranceKeywordPage, { generateMetadata } from './unline-old-school-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineOldSchoolServerFranceKeywordPage />;
}
