import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-germany-servers');
}

export default function TibianusGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-germany-servers" />;
}
