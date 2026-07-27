import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-chile-server');
}

export default function SabrehavenChileServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-chile-server" />;
}
