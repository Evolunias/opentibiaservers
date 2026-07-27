import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-poland-servers');
}

export default function MediviaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-poland-servers" />;
}
