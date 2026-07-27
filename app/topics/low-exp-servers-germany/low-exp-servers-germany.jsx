import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-germany');
}

export default function LowExpServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-germany" />;
}
