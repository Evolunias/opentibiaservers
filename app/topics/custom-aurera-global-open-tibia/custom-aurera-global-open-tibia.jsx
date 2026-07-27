import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-open-tibia');
}

export default function CustomAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-open-tibia" />;
}
