import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-open-tibia');
}

export default function CurrentElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-open-tibia" />;
}
