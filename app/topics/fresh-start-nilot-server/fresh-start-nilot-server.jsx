import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-server');
}

export default function FreshStartNilotServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-server" />;
}
