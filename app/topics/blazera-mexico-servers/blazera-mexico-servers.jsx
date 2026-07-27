import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-mexico-servers');
}

export default function BlazeraMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-mexico-servers" />;
}
