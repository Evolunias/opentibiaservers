import Rubinot15SeasonalServerKeywordPage, { generateMetadata } from './rubinot-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot15SeasonalServerKeywordPage />;
}
