import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-ot-server');
}

export default function NewCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-ot-server" />;
}
