import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-ot');
}

export default function CurrentCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-ot" />;
}
