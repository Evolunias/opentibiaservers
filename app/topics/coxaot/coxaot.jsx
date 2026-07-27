import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot');
}

export default function CoxaotKeywordPage() {
  return <StaticKeywordPage slug="coxaot" />;
}
