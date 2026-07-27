import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-tibia');
}

export default function ActiveAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-tibia" />;
}
