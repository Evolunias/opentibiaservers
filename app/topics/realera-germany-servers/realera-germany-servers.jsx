import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-germany-servers');
}

export default function RealeraGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="realera-germany-servers" />;
}
