import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-sweden-servers');
}

export default function SabrehavenSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-sweden-servers" />;
}
