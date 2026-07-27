import ClassicusUptimeKeywordPage, { generateMetadata } from './classicus-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusUptimeKeywordPage />;
}
