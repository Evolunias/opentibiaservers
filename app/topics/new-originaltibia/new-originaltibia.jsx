import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia');
}

export default function NewOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia" />;
}
