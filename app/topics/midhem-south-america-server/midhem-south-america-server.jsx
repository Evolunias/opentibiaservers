import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-south-america-server');
}

export default function MidhemSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-south-america-server" />;
}
