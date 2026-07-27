import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-argentina-server');
}

export default function MediviaArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-argentina-server" />;
}
