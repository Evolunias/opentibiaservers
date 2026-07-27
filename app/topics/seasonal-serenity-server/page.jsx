import SeasonalSerenityServerKeywordPage, { generateMetadata } from './seasonal-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSerenityServerKeywordPage />;
}
