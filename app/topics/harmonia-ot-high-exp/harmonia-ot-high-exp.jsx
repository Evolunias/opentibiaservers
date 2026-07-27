import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp');
}

export default function HarmoniaOtHighExpKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp" />;
}
