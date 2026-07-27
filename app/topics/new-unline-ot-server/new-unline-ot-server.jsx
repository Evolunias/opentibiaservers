import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-ot-server');
}

export default function NewUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-unline-ot-server" />;
}
