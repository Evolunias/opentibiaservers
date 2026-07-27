import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-open-tibia');
}

export default function TopRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-realera-open-tibia" />;
}
