import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-ot-server');
}

export default function PopularClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-ot-server" />;
}
