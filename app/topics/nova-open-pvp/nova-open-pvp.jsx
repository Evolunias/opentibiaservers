import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-open-pvp');
}

export default function NovaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="nova-open-pvp" />;
}
