import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-mexico');
}

export default function MiraclePvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-mexico" />;
}
