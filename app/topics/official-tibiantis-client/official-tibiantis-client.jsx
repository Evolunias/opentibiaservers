import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-client');
}

export default function OfficialTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-client" />;
}
