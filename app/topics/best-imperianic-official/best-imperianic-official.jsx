import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-official');
}

export default function BestImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-official" />;
}
