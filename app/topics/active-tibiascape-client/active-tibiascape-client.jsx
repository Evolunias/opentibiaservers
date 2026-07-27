import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-client');
}

export default function ActiveTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-client" />;
}
