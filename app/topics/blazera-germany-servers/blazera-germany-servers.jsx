import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-germany-servers');
}

export default function BlazeraGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-germany-servers" />;
}
