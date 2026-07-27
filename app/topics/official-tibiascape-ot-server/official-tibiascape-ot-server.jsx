import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-ot-server');
}

export default function OfficialTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-ot-server" />;
}
