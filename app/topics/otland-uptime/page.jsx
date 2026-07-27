import OtlandUptimeKeywordPage, { generateMetadata } from './otland-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandUptimeKeywordPage />;
}
