import Serenity80SeasonalServerKeywordPage, { generateMetadata } from './serenity-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity80SeasonalServerKeywordPage />;
}
