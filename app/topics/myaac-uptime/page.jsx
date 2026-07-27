import MyaacUptimeKeywordPage, { generateMetadata } from './myaac-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacUptimeKeywordPage />;
}
