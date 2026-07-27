import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-usa-servers');
}

export default function MediviaUsaServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-usa-servers" />;
}
