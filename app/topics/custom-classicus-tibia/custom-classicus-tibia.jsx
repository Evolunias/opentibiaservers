import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-tibia');
}

export default function CustomClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-tibia" />;
}
