import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-server');
}

export default function OfficialTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-server" />;
}
