import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-client');
}

export default function ActiveTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-client" />;
}
