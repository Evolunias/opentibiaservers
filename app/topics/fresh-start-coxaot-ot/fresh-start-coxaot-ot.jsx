import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-ot');
}

export default function FreshStartCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-ot" />;
}
