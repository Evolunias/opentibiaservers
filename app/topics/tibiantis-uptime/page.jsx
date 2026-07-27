import TibiantisUptimeKeywordPage, { generateMetadata } from './tibiantis-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisUptimeKeywordPage />;
}
