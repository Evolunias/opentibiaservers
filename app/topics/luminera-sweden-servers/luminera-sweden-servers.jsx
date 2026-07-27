import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-sweden-servers');
}

export default function LumineraSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-sweden-servers" />;
}
