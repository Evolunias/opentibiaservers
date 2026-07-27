import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-thornia-server');
}

export default function HighExpThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-thornia-server" />;
}
