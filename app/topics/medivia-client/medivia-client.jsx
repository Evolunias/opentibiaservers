import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-client');
}

export default function MediviaClientKeywordPage() {
  return <StaticKeywordPage slug="medivia-client" />;
}
