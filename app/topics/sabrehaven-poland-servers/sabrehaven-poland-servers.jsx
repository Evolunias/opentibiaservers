import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-poland-servers');
}

export default function SabrehavenPolandServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-poland-servers" />;
}
