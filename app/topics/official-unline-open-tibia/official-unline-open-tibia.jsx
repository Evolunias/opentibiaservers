import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-open-tibia');
}

export default function OfficialUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-unline-open-tibia" />;
}
