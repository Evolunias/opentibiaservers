import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-client');
}

export default function OfficialTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-client" />;
}
