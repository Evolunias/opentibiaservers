import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-open-tibia');
}

export default function TopRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-open-tibia" />;
}
