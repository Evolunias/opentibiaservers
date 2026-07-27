import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp');
}

export default function SabrehavenPvpKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp" />;
}
