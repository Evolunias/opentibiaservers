import ImperianicUptimeKeywordPage, { generateMetadata } from './imperianic-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicUptimeKeywordPage />;
}
