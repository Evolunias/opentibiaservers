import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-ots');
}

export default function CustomCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-ots" />;
}
