import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-official');
}

export default function BestElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-official" />;
}
