import TibiameUptimeKeywordPage, { generateMetadata } from './tibiame-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameUptimeKeywordPage />;
}
