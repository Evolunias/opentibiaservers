import Evolunia71SeasonalServerKeywordPage, { generateMetadata } from './evolunia-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia71SeasonalServerKeywordPage />;
}
