import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-germany');
}

export default function HighExpServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-germany" />;
}
