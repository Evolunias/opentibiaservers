import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-latin-america-server');
}

export default function MediviaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-latin-america-server" />;
}
