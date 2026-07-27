import RangerSArcaniPrivateServerKeywordPage, { generateMetadata } from './ranger-s-arcani-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniPrivateServerKeywordPage />;
}
