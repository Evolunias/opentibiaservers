import Thornia96SeasonalServerKeywordPage, { generateMetadata } from './thornia-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia96SeasonalServerKeywordPage />;
}
