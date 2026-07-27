import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-ot');
}

export default function OriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-ot" />;
}
