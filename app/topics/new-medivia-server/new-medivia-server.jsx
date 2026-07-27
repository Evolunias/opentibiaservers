import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-server');
}

export default function NewMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-server" />;
}
