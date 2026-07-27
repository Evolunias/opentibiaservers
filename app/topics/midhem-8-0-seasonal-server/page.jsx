import Midhem80SeasonalServerKeywordPage, { generateMetadata } from './midhem-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem80SeasonalServerKeywordPage />;
}
