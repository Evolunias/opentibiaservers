import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-open-tibia');
}

export default function TopOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-open-tibia" />;
}
