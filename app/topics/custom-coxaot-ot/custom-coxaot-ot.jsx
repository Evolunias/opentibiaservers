import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-ot');
}

export default function CustomCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-ot" />;
}
