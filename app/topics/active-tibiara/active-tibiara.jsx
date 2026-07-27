import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara');
}

export default function ActiveTibiaraKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara" />;
}
