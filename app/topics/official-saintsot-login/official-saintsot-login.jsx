import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-login');
}

export default function OfficialSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-login" />;
}
