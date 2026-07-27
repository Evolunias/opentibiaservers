import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-ot-server');
}

export default function ActiveOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-ot-server" />;
}
