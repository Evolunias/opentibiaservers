import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-open-tibia');
}

export default function OlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="oldera-open-tibia" />;
}
