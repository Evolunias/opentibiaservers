import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-canada');
}

export default function HighExpServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-canada" />;
}
