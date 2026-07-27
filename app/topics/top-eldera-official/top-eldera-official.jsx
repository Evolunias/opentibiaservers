import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-official');
}

export default function TopElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-official" />;
}
