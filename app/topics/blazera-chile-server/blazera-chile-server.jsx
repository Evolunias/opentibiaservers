import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-chile-server');
}

export default function BlazeraChileServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-chile-server" />;
}
