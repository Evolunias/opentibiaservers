import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-open-tibia');
}

export default function TopElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-open-tibia" />;
}
