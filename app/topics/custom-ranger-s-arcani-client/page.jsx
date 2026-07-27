import CustomRangerSArcaniClientKeywordPage, { generateMetadata } from './custom-ranger-s-arcani-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRangerSArcaniClientKeywordPage />;
}
