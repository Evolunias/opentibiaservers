import CarlinotUptimeKeywordPage, { generateMetadata } from './carlinot-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotUptimeKeywordPage />;
}
