import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-server');
}

export default function CelestaServerKeywordPage() {
  return <StaticKeywordPage slug="celesta-server" />;
}
