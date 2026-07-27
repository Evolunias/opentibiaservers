import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-tibia');
}

export default function ImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-tibia" />;
}
