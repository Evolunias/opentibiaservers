import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-germany-servers');
}

export default function MediviaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-germany-servers" />;
}
