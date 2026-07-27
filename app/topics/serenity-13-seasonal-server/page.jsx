import Serenity13SeasonalServerKeywordPage, { generateMetadata } from './serenity-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13SeasonalServerKeywordPage />;
}
