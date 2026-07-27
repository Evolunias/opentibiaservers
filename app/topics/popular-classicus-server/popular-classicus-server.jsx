import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-server');
}

export default function PopularClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-server" />;
}
