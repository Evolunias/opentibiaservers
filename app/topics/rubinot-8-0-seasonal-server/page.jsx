import Rubinot80SeasonalServerKeywordPage, { generateMetadata } from './rubinot-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot80SeasonalServerKeywordPage />;
}
