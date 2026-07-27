import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-germany-server');
}

export default function MediviaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-germany-server" />;
}
