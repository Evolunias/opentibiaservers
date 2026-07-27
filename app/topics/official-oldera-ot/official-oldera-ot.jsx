import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-ot');
}

export default function OfficialOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-ot" />;
}
