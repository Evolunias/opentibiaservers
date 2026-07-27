import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-france-servers');
}

export default function SabrehavenFranceServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-france-servers" />;
}
