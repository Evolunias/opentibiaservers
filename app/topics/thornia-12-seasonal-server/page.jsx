import Thornia12SeasonalServerKeywordPage, { generateMetadata } from './thornia-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12SeasonalServerKeywordPage />;
}
