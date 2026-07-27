import NilotUptimeKeywordPage, { generateMetadata } from './nilot-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotUptimeKeywordPage />;
}
