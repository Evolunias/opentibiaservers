import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-open-tibia');
}

export default function BestOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-open-tibia" />;
}
