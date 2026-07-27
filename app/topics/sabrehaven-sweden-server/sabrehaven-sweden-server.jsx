import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-sweden-server');
}

export default function SabrehavenSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-sweden-server" />;
}
