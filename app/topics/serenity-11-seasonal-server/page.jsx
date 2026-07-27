import Serenity11SeasonalServerKeywordPage, { generateMetadata } from './serenity-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11SeasonalServerKeywordPage />;
}
