import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-ot');
}

export default function TibianusOtKeywordPage() {
  return <StaticKeywordPage slug="tibianus-ot" />;
}
