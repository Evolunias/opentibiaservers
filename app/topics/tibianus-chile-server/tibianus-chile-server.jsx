import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-chile-server');
}

export default function TibianusChileServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-chile-server" />;
}
