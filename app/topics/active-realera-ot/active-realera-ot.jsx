import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-ot');
}

export default function ActiveRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="active-realera-ot" />;
}
