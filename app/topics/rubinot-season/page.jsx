import RubinotSeasonKeywordPage, { generateMetadata } from './rubinot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotSeasonKeywordPage />;
}
