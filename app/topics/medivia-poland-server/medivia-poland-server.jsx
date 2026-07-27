import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-poland-server');
}

export default function MediviaPolandServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-poland-server" />;
}
