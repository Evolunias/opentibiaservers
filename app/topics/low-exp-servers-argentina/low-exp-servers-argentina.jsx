import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-argentina');
}

export default function LowExpServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-argentina" />;
}
