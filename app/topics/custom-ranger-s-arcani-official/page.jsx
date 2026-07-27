import CustomRangerSArcaniOfficialKeywordPage, { generateMetadata } from './custom-ranger-s-arcani-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRangerSArcaniOfficialKeywordPage />;
}
