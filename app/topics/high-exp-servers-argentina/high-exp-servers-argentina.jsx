import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-argentina');
}

export default function HighExpServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-argentina" />;
}
