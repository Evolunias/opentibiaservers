import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-non-pvp-server-europe');
}

export default function SabrehavenNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-non-pvp-server-europe" />;
}
