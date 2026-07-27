import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-open-tibia');
}

export default function OfficialRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-open-tibia" />;
}
