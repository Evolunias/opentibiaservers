import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-open-tibia');
}

export default function ActiveOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-open-tibia" />;
}
