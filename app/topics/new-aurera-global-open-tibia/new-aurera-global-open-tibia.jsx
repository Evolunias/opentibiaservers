import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-open-tibia');
}

export default function NewAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-open-tibia" />;
}
