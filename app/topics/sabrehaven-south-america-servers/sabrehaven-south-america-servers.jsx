import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-south-america-servers');
}

export default function SabrehavenSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-south-america-servers" />;
}
