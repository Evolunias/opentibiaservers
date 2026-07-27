import OldSchoolXanteriaDownloadKeywordPage, { generateMetadata } from './old-school-xanteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaDownloadKeywordPage />;
}
