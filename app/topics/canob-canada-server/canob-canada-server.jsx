import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-canada-server');
}

export default function CanobCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="canob-canada-server" />;
}
