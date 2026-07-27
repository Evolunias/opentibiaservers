import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-official');
}

export default function RealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="realera-official" />;
}
