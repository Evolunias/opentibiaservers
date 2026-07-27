import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia');
}

export default function ActiveOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia" />;
}
