import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-open-tibia');
}

export default function RealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="realesta-open-tibia" />;
}
