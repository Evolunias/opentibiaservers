import DemolidoresSeasonalServerBrazilKeywordPage, { generateMetadata } from './demolidores-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresSeasonalServerBrazilKeywordPage />;
}
