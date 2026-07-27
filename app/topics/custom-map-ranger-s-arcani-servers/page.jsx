import CustomMapRangerSArcaniServersKeywordPage, { generateMetadata } from './custom-map-ranger-s-arcani-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRangerSArcaniServersKeywordPage />;
}
