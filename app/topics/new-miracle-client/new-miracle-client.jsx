import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-client');
}

export default function NewMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-client" />;
}
