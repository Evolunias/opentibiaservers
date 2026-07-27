import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-sweden-servers');
}

export default function BlazeraSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-sweden-servers" />;
}
