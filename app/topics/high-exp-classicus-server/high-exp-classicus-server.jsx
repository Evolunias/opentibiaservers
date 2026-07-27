import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-classicus-server');
}

export default function HighExpClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-classicus-server" />;
}
