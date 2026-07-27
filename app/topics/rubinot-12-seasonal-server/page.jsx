import Rubinot12SeasonalServerKeywordPage, { generateMetadata } from './rubinot-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot12SeasonalServerKeywordPage />;
}
