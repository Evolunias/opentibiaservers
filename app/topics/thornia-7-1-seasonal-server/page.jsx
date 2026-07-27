import Thornia71SeasonalServerKeywordPage, { generateMetadata } from './thornia-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia71SeasonalServerKeywordPage />;
}
