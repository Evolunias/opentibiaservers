import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-server');
}

export default function MorganaServerKeywordPage() {
  return <StaticKeywordPage slug="morgana-server" />;
}
