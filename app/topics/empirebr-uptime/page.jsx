import EmpirebrUptimeKeywordPage, { generateMetadata } from './empirebr-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrUptimeKeywordPage />;
}
