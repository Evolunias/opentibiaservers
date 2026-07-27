import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-poland');
}

export default function LowExpServersPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-poland" />;
}
