import CalmeraOtUptimeKeywordPage, { generateMetadata } from './calmera-ot-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtUptimeKeywordPage />;
}
