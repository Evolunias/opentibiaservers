import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-open-tibia');
}

export default function OfficialOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-open-tibia" />;
}
