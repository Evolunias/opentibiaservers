import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-client');
}

export default function FreshStartCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-client" />;
}
