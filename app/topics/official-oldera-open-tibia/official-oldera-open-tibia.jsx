import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-open-tibia');
}

export default function OfficialOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-open-tibia" />;
}
