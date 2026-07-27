import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-client');
}

export default function OfficialDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-client" />;
}
