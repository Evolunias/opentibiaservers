import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia');
}

export default function DanubiaKeywordPage() {
  return <StaticKeywordPage slug="danubia" />;
}
