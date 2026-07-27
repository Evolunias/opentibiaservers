import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-chile-servers');
}

export default function SabrehavenChileServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-chile-servers" />;
}
