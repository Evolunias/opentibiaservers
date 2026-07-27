import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-official');
}

export default function FreshStartElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-official" />;
}
