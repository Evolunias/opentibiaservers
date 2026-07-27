import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ot-server-mexico');
}

export default function HighExpOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ot-server-mexico" />;
}
