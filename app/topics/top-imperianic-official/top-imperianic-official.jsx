import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-official');
}

export default function TopImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-official" />;
}
