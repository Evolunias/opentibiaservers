import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-sweden-server');
}

export default function BlazeraSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-sweden-server" />;
}
