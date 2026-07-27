import OldSchoolArcaniarlDownloadKeywordPage, { generateMetadata } from './old-school-arcaniarl-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlDownloadKeywordPage />;
}
