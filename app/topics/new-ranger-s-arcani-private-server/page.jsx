import NewRangerSArcaniPrivateServerKeywordPage, { generateMetadata } from './new-ranger-s-arcani-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRangerSArcaniPrivateServerKeywordPage />;
}
