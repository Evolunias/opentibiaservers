import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-server');
}

export default function ActiveNilotServerKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-server" />;
}
