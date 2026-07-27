import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-official');
}

export default function OfficialElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-official" />;
}
