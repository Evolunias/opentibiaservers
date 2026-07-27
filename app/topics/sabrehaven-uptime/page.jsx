import SabrehavenUptimeKeywordPage, { generateMetadata } from './sabrehaven-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenUptimeKeywordPage />;
}
