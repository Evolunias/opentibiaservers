import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-ot-server');
}

export default function NewMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-ot-server" />;
}
