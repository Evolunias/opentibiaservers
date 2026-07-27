import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-tibia');
}

export default function NewAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-tibia" />;
}
