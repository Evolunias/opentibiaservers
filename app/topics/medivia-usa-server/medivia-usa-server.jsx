import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-usa-server');
}

export default function MediviaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-usa-server" />;
}
