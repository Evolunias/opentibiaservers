import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-server');
}

export default function OfficialTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-server" />;
}
