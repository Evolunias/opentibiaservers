import RubinotUptimeKeywordPage, { generateMetadata } from './rubinot-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotUptimeKeywordPage />;
}
