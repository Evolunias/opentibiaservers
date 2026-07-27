import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-website');
}

export default function NewElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-website" />;
}
