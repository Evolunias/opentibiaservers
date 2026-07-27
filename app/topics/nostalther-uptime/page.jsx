import NostaltherUptimeKeywordPage, { generateMetadata } from './nostalther-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherUptimeKeywordPage />;
}
