import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-server');
}

export default function NewCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-server" />;
}
