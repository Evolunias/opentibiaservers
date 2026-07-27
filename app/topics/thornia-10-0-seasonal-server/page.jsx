import Thornia100SeasonalServerKeywordPage, { generateMetadata } from './thornia-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia100SeasonalServerKeywordPage />;
}
