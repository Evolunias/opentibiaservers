import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-official');
}

export default function BestXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-official" />;
}
