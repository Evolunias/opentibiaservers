import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-official');
}

export default function OfficialTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-official" />;
}
