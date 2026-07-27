import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-bosses');
}

export default function RealeraBossesKeywordPage() {
  return <StaticKeywordPage slug="realera-bosses" />;
}
