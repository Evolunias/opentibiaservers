import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-open-tibia');
}

export default function ActiveOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-open-tibia" />;
}
