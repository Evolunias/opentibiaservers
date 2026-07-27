import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-official');
}

export default function NewSeasonElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-official" />;
}
