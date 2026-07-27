import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-harmonia-ot-server');
}

export default function HighExpHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-harmonia-ot-server" />;
}
