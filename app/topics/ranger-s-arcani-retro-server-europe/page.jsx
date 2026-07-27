import RangerSArcaniRetroServerEuropeKeywordPage, { generateMetadata } from './ranger-s-arcani-retro-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniRetroServerEuropeKeywordPage />;
}
