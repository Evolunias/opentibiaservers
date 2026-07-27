import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-ot-server');
}

export default function NewCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-ot-server" />;
}
