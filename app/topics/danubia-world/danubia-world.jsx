import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-world');
}

export default function DanubiaWorldKeywordPage() {
  return <StaticKeywordPage slug="danubia-world" />;
}
