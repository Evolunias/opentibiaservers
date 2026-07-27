import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-website');
}

export default function NewOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-website" />;
}
