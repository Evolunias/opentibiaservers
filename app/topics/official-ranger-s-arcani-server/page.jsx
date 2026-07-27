import OfficialRangerSArcaniServerKeywordPage, { generateMetadata } from './official-ranger-s-arcani-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRangerSArcaniServerKeywordPage />;
}
