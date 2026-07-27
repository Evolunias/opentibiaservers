import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-mist-of-death-server');
}

export default function HighExpMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-mist-of-death-server" />;
}
