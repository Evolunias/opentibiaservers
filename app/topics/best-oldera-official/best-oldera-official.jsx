import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-official');
}

export default function BestOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-official" />;
}
