import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-server');
}

export default function FreshStartCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-server" />;
}
