import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-argentina-servers');
}

export default function OxygenotArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-argentina-servers" />;
}
