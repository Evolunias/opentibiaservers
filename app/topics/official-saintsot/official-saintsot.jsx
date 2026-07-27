import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot');
}

export default function OfficialSaintsotKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot" />;
}
