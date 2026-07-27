import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora');
}

export default function AldoraKeywordPage() {
  return <StaticKeywordPage slug="aldora" />;
}
