import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-sweden-server');
}

export default function LumineraSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-sweden-server" />;
}
