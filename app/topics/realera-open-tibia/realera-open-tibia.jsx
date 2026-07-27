import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-open-tibia');
}

export default function RealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="realera-open-tibia" />;
}
