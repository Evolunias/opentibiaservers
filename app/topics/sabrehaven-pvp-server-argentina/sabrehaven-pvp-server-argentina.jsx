import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-argentina');
}

export default function SabrehavenPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-argentina" />;
}
