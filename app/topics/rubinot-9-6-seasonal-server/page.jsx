import Rubinot96SeasonalServerKeywordPage, { generateMetadata } from './rubinot-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot96SeasonalServerKeywordPage />;
}
