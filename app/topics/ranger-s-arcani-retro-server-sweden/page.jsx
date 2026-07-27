import RangerSArcaniRetroServerSwedenKeywordPage, { generateMetadata } from './ranger-s-arcani-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniRetroServerSwedenKeywordPage />;
}
