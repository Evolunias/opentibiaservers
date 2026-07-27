import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-4-fresh-start-server');
}

export default function Medivia74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-4-fresh-start-server" />;
}
