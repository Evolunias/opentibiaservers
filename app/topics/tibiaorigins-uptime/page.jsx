import TibiaoriginsUptimeKeywordPage, { generateMetadata } from './tibiaorigins-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsUptimeKeywordPage />;
}
