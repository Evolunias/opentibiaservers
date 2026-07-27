import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-server');
}

export default function OfficialSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-server" />;
}
