import Sabrehaven12SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven12SeasonalServerKeywordPage />;
}
