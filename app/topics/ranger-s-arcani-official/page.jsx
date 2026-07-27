import RangerSArcaniOfficialKeywordPage, { generateMetadata } from './ranger-s-arcani-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniOfficialKeywordPage />;
}
