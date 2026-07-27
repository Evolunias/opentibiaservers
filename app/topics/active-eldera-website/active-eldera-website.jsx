import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-website');
}

export default function ActiveElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-website" />;
}
