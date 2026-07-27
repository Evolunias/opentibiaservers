import Evolunia96SeasonalServerKeywordPage, { generateMetadata } from './evolunia-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia96SeasonalServerKeywordPage />;
}
