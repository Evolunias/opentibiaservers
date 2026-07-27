import Thornia15SeasonalServerKeywordPage, { generateMetadata } from './thornia-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15SeasonalServerKeywordPage />;
}
