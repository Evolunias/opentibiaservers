import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-events');
}

export default function CyntaraEventsKeywordPage() {
  return <StaticKeywordPage slug="cyntara-events" />;
}
