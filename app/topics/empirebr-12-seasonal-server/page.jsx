import Empirebr12SeasonalServerKeywordPage, { generateMetadata } from './empirebr-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Empirebr12SeasonalServerKeywordPage />;
}
