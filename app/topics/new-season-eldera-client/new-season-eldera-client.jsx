import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-client');
}

export default function NewSeasonElderaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-client" />;
}
