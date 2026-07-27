import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-server');
}

export default function FreshStartThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-server" />;
}
