import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-open-tibia');
}

export default function OriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-open-tibia" />;
}
