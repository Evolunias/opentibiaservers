import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-ot-server');
}

export default function FreshStartNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-ot-server" />;
}
