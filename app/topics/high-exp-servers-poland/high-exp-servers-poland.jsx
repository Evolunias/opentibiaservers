import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-poland');
}

export default function HighExpServersPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-poland" />;
}
