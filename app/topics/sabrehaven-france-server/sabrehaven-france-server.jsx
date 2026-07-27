import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-france-server');
}

export default function SabrehavenFranceServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-france-server" />;
}
