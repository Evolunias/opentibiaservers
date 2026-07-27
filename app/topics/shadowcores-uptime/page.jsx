import ShadowcoresUptimeKeywordPage, { generateMetadata } from './shadowcores-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresUptimeKeywordPage />;
}
