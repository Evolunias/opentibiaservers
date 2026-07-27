import CustomRangerSArcaniPrivateServerKeywordPage, { generateMetadata } from './custom-ranger-s-arcani-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRangerSArcaniPrivateServerKeywordPage />;
}
