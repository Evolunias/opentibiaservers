import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-kasteria-server');
}

export default function HighExpKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-kasteria-server" />;
}
