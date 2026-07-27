import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-server');
}

export default function VineraServerKeywordPage() {
  return <StaticKeywordPage slug="vinera-server" />;
}
