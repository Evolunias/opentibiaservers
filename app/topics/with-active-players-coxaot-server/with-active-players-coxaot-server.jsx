import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-coxaot-server');
}

export default function WithActivePlayersCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-coxaot-server" />;
}
