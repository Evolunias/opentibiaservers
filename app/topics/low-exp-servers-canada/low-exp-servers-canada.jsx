import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-canada');
}

export default function LowExpServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-canada" />;
}
