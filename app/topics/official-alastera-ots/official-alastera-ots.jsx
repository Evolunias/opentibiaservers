import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-ots');
}

export default function OfficialAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-ots" />;
}
