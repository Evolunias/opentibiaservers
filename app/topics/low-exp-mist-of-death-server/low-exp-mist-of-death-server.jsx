import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-mist-of-death-server');
}

export default function LowExpMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-mist-of-death-server" />;
}
