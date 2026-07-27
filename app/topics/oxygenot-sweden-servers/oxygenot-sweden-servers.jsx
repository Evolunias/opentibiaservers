import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-sweden-servers');
}

export default function OxygenotSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-sweden-servers" />;
}
