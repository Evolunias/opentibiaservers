import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-website');
}

export default function LowrateElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-website" />;
}
