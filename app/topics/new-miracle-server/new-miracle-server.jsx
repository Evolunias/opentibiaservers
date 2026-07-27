import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-server');
}

export default function NewMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-server" />;
}
