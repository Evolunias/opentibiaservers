import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-ot');
}

export default function ActiveTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-ot" />;
}
