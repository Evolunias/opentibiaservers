import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-mexico-server');
}

export default function BlazeraMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-mexico-server" />;
}
