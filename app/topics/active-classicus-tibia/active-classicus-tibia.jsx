import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-tibia');
}

export default function ActiveClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-tibia" />;
}
