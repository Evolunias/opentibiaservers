import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-tibia');
}

export default function CustomXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-tibia" />;
}
