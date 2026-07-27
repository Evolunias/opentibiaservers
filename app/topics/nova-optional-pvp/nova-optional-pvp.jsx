import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-optional-pvp');
}

export default function NovaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="nova-optional-pvp" />;
}
