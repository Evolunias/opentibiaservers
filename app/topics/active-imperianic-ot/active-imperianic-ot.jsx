import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-ot');
}

export default function ActiveImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-ot" />;
}
