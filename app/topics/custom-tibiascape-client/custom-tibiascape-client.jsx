import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-client');
}

export default function CustomTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-client" />;
}
