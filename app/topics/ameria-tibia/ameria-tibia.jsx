import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-tibia');
}

export default function AmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="ameria-tibia" />;
}
