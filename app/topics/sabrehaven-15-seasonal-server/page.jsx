import Sabrehaven15SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven15SeasonalServerKeywordPage />;
}
