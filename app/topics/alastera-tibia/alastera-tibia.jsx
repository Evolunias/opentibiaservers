import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-tibia');
}

export default function AlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="alastera-tibia" />;
}
