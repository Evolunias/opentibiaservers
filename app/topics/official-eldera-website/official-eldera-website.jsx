import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-website');
}

export default function OfficialElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-website" />;
}
