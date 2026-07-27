import SeasonalNilotServerKeywordPage, { generateMetadata } from './seasonal-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalNilotServerKeywordPage />;
}
