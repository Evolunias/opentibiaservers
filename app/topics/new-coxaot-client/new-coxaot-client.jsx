import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-client');
}

export default function NewCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-client" />;
}
