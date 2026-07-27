import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-europe');
}

export default function SabrehavenPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-europe" />;
}
