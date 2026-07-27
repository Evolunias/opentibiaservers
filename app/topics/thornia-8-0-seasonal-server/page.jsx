import Thornia80SeasonalServerKeywordPage, { generateMetadata } from './thornia-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia80SeasonalServerKeywordPage />;
}
