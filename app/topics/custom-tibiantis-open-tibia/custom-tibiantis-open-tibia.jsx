import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-open-tibia');
}

export default function CustomTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-open-tibia" />;
}
