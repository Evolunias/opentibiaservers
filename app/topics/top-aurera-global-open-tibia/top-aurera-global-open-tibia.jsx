import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-open-tibia');
}

export default function TopAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-open-tibia" />;
}
