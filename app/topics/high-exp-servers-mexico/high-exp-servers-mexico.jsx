import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-mexico');
}

export default function HighExpServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-mexico" />;
}
