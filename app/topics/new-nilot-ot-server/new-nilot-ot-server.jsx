import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-ot-server');
}

export default function NewNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-ot-server" />;
}
