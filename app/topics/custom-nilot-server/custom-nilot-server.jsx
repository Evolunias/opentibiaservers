import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-server');
}

export default function CustomNilotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-server" />;
}
