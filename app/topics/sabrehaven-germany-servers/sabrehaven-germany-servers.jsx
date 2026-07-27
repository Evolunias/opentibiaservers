import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-germany-servers');
}

export default function SabrehavenGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-germany-servers" />;
}
