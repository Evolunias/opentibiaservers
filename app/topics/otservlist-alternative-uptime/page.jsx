import OtservlistAlternativeUptimeKeywordPage, { generateMetadata } from './otservlist-alternative-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeUptimeKeywordPage />;
}
