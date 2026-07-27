import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-client');
}

export default function SabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-client" />;
}
