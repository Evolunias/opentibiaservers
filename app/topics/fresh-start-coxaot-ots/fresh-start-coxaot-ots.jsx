import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-ots');
}

export default function FreshStartCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-ots" />;
}
