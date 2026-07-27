import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-chile-server');
}

export default function ThaisotChileServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-chile-server" />;
}
