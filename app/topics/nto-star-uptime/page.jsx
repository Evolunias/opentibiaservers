import NtoStarUptimeKeywordPage, { generateMetadata } from './nto-star-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarUptimeKeywordPage />;
}
