import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-world');
}

export default function AldoraWorldKeywordPage() {
  return <StaticKeywordPage slug="aldora-world" />;
}
