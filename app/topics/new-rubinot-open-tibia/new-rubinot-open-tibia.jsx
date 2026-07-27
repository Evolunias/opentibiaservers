import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-open-tibia');
}

export default function NewRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-open-tibia" />;
}
