import Evolunia80SeasonalServerKeywordPage, { generateMetadata } from './evolunia-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia80SeasonalServerKeywordPage />;
}
