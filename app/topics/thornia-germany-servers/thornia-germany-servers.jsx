import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-germany-servers');
}

export default function ThorniaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-germany-servers" />;
}
