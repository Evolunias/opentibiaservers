import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-open-tibia');
}

export default function AmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="ameria-open-tibia" />;
}
