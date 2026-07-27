import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-bosses');
}

export default function MiracleBossesKeywordPage() {
  return <StaticKeywordPage slug="miracle-bosses" />;
}
