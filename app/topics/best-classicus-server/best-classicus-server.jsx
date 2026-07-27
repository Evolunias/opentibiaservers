import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-server');
}

export default function BestClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-server" />;
}
