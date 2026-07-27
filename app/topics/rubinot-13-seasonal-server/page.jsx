import Rubinot13SeasonalServerKeywordPage, { generateMetadata } from './rubinot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot13SeasonalServerKeywordPage />;
}
