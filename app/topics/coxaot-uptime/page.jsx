import CoxaotUptimeKeywordPage, { generateMetadata } from './coxaot-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotUptimeKeywordPage />;
}
