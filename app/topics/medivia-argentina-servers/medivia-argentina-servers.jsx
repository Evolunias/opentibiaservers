import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-argentina-servers');
}

export default function MediviaArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-argentina-servers" />;
}
