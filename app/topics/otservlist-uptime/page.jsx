import OtservlistUptimeKeywordPage, { generateMetadata } from './otservlist-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistUptimeKeywordPage />;
}
