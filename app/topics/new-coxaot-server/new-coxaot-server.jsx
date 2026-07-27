import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-server');
}

export default function NewCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-server" />;
}
