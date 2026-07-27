import Serenity1098SeasonalServerKeywordPage, { generateMetadata } from './serenity-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity1098SeasonalServerKeywordPage />;
}
