import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-client');
}

export default function ActiveClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-client" />;
}
