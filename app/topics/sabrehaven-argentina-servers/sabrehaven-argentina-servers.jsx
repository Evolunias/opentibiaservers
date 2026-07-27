import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-argentina-servers');
}

export default function SabrehavenArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-argentina-servers" />;
}
