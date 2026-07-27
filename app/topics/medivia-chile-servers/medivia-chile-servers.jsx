import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-chile-servers');
}

export default function MediviaChileServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-chile-servers" />;
}
