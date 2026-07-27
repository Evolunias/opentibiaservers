import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-france-server');
}

export default function MiracleFranceServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-france-server" />;
}
