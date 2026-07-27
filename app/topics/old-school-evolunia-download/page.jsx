import OldSchoolEvoluniaDownloadKeywordPage, { generateMetadata } from './old-school-evolunia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaDownloadKeywordPage />;
}
