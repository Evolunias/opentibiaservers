import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-client');
}

export default function ActiveCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-client" />;
}
