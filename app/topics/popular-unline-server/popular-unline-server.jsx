import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-server');
}

export default function PopularUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-server" />;
}
