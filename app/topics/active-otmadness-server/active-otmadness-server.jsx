import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-server');
}

export default function ActiveOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-server" />;
}
