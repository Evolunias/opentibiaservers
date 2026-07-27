import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-south-america-server');
}

export default function SabrehavenSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-south-america-server" />;
}
