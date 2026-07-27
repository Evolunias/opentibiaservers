import Serenity12SeasonalServerKeywordPage, { generateMetadata } from './serenity-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12SeasonalServerKeywordPage />;
}
