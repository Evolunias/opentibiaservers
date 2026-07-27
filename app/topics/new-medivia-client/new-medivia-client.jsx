import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-client');
}

export default function NewMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-client" />;
}
