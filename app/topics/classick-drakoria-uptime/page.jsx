import ClassickDrakoriaUptimeKeywordPage, { generateMetadata } from './classick-drakoria-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaUptimeKeywordPage />;
}
