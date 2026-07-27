import Serenity81SeasonalServerKeywordPage, { generateMetadata } from './serenity-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity81SeasonalServerKeywordPage />;
}
