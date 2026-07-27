import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-open-tibia');
}

export default function ActiveAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-open-tibia" />;
}
