import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-ots');
}

export default function NewSeasonElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-ots" />;
}
