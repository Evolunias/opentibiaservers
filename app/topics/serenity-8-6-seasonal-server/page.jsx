import Serenity86SeasonalServerKeywordPage, { generateMetadata } from './serenity-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity86SeasonalServerKeywordPage />;
}
