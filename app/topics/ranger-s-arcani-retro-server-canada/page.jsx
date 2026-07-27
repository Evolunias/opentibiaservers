import RangerSArcaniRetroServerCanadaKeywordPage, { generateMetadata } from './ranger-s-arcani-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniRetroServerCanadaKeywordPage />;
}
