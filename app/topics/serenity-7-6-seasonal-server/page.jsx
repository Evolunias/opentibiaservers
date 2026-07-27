import Serenity76SeasonalServerKeywordPage, { generateMetadata } from './serenity-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity76SeasonalServerKeywordPage />;
}
