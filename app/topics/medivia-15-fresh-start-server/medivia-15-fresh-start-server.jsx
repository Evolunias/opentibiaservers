import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-fresh-start-server');
}

export default function Medivia15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-fresh-start-server" />;
}
