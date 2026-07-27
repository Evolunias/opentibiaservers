import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-nostalther-server');
}

export default function HighExpNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-nostalther-server" />;
}
