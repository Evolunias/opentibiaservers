import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-client');
}

export default function CustomClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-client" />;
}
