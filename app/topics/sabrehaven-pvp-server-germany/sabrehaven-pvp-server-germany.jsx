import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-germany');
}

export default function SabrehavenPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-germany" />;
}
