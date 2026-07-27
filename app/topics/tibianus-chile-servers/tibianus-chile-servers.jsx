import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-chile-servers');
}

export default function TibianusChileServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-chile-servers" />;
}
