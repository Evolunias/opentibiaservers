import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-ot');
}

export default function CustomTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-ot" />;
}
