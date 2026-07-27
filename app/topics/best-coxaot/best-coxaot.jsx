import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot');
}

export default function BestCoxaotKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot" />;
}
