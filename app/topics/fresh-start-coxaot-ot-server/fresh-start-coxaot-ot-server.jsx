import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-ot-server');
}

export default function FreshStartCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-ot-server" />;
}
