import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-open-tibia');
}

export default function CustomOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-open-tibia" />;
}
