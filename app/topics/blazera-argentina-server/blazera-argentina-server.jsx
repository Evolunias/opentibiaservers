import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-argentina-server');
}

export default function BlazeraArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-argentina-server" />;
}
