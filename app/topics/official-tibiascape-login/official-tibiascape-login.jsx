import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-login');
}

export default function OfficialTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-login" />;
}
