import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fun-server');
}

export default function LumineraFunServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-fun-server" />;
}
