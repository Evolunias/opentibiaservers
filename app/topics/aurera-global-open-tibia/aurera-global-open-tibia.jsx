import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-open-tibia');
}

export default function AureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-open-tibia" />;
}
