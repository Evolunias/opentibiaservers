import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-ots');
}

export default function ActiveTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-ots" />;
}
