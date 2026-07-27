import Sabrehaven80SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven80SeasonalServerKeywordPage />;
}
