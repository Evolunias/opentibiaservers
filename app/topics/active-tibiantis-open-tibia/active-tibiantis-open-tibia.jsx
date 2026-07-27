import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-open-tibia');
}

export default function ActiveTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-open-tibia" />;
}
