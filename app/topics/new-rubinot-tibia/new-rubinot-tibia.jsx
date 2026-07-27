import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-tibia');
}

export default function NewRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-tibia" />;
}
