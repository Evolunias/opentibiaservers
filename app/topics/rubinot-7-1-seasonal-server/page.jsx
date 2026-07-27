import Rubinot71SeasonalServerKeywordPage, { generateMetadata } from './rubinot-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot71SeasonalServerKeywordPage />;
}
