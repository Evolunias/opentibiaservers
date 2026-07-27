import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-ots');
}

export default function OfficialOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-ots" />;
}
