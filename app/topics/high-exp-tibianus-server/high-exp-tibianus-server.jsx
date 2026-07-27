import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-tibianus-server');
}

export default function HighExpTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-tibianus-server" />;
}
