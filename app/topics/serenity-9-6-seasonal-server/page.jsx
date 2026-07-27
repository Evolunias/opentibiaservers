import Serenity96SeasonalServerKeywordPage, { generateMetadata } from './serenity-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96SeasonalServerKeywordPage />;
}
