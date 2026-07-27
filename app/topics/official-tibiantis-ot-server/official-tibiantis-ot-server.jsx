import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-ot-server');
}

export default function OfficialTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-ot-server" />;
}
