import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-tibia');
}

export default function TibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-tibia" />;
}
