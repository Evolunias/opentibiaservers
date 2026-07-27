import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-ots');
}

export default function CustomTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-ots" />;
}
