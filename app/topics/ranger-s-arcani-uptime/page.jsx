import RangerSArcaniUptimeKeywordPage, { generateMetadata } from './ranger-s-arcani-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniUptimeKeywordPage />;
}
