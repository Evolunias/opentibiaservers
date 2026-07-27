import Serenity74SeasonalServerKeywordPage, { generateMetadata } from './serenity-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity74SeasonalServerKeywordPage />;
}
