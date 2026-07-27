import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-server');
}

export default function NewSeasonElderaServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-server" />;
}
