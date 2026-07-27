import SerenityUptimeKeywordPage, { generateMetadata } from './serenity-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityUptimeKeywordPage />;
}
