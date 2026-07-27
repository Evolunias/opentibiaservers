import RangerSArcaniRetroServerArgentinaKeywordPage, { generateMetadata } from './ranger-s-arcani-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniRetroServerArgentinaKeywordPage />;
}
