import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-0-pvp-server');
}

export default function Otmadness80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-0-pvp-server" />;
}
