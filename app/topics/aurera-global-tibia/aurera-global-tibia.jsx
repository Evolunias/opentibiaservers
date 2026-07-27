import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-tibia');
}

export default function AureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-tibia" />;
}
