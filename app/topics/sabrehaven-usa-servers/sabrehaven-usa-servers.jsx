import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-usa-servers');
}

export default function SabrehavenUsaServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-usa-servers" />;
}
