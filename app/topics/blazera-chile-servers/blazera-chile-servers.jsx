import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-chile-servers');
}

export default function BlazeraChileServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-chile-servers" />;
}
