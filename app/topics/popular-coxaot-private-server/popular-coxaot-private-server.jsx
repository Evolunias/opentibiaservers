import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-private-server');
}

export default function PopularCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-private-server" />;
}
