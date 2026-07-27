import Empirebr15SeasonalServerKeywordPage, { generateMetadata } from './empirebr-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Empirebr15SeasonalServerKeywordPage />;
}
