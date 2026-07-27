import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-tibia');
}

export default function TopAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-tibia" />;
}
