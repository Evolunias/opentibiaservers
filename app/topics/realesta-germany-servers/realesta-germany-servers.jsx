import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-germany-servers');
}

export default function RealestaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-germany-servers" />;
}
