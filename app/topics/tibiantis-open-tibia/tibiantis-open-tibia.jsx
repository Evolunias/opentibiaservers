import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-open-tibia');
}

export default function TibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-open-tibia" />;
}
