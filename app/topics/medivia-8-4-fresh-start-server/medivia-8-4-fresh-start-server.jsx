import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-fresh-start-server');
}

export default function Medivia84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-fresh-start-server" />;
}
