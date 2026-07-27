import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-fresh-start-server');
}

export default function Medivia11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-fresh-start-server" />;
}
