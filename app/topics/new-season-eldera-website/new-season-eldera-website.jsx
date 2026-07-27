import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-website');
}

export default function NewSeasonElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-website" />;
}
