import CustomRangerSArcaniOtServerKeywordPage, { generateMetadata } from './custom-ranger-s-arcani-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRangerSArcaniOtServerKeywordPage />;
}
