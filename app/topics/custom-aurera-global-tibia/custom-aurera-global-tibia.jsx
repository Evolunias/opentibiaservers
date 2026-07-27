import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-tibia');
}

export default function CustomAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-tibia" />;
}
