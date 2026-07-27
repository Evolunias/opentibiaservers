import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-germany-servers');
}

export default function UnlineGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="unline-germany-servers" />;
}
