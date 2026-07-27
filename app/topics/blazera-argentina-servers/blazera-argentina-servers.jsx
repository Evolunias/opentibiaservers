import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-argentina-servers');
}

export default function BlazeraArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-argentina-servers" />;
}
