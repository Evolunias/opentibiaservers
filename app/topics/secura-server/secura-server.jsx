import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-server');
}

export default function SecuraServerKeywordPage() {
  return <StaticKeywordPage slug="secura-server" />;
}
