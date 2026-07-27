import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-france-servers');
}

export default function MiracleFranceServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-france-servers" />;
}
