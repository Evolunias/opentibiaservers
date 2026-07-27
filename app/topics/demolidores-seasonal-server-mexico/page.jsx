import DemolidoresSeasonalServerMexicoKeywordPage, { generateMetadata } from './demolidores-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresSeasonalServerMexicoKeywordPage />;
}
