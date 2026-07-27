import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-server');
}

export default function OfficialDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-server" />;
}
