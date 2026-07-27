import Shadowcores80SeasonalServerKeywordPage, { generateMetadata } from './shadowcores-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores80SeasonalServerKeywordPage />;
}
