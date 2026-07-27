import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-official');
}

export default function PopularElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-official" />;
}
