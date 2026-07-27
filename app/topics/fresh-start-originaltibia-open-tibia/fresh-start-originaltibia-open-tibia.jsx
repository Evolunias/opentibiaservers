import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-open-tibia');
}

export default function FreshStartOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-open-tibia" />;
}
