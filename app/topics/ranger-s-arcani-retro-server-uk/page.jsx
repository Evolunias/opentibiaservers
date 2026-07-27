import RangerSArcaniRetroServerUkKeywordPage, { generateMetadata } from './ranger-s-arcani-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniRetroServerUkKeywordPage />;
}
