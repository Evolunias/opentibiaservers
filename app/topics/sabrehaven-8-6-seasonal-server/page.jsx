import Sabrehaven86SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven86SeasonalServerKeywordPage />;
}
