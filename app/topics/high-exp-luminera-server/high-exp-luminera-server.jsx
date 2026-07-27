import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-luminera-server');
}

export default function HighExpLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-luminera-server" />;
}
