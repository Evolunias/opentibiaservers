import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores');
}

export default function OfficialDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores" />;
}
