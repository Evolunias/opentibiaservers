import OfficialRangerSArcaniPrivateServerKeywordPage, { generateMetadata } from './official-ranger-s-arcani-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRangerSArcaniPrivateServerKeywordPage />;
}
