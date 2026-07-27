import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-client');
}

export default function OfficialSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-client" />;
}
