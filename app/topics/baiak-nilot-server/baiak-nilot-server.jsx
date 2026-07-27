import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-nilot-server');
}

export default function BaiakNilotServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-nilot-server" />;
}
