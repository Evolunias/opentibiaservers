import OxygenotSeasonalServerBrazilKeywordPage, { generateMetadata } from './oxygenot-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotSeasonalServerBrazilKeywordPage />;
}
