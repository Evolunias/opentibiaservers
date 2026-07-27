import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-open-tibia');
}

export default function ImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-open-tibia" />;
}
