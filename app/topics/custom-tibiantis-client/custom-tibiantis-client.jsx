import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-client');
}

export default function CustomTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-client" />;
}
