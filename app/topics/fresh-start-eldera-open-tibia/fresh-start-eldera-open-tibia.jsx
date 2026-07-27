import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-open-tibia');
}

export default function FreshStartElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-open-tibia" />;
}
