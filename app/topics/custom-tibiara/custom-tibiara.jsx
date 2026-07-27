import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara');
}

export default function CustomTibiaraKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara" />;
}
