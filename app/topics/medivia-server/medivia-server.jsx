import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-server');
}

export default function MediviaServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-server" />;
}
