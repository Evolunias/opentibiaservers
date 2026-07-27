import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-germany-server');
}

export default function CanobGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="canob-germany-server" />;
}
