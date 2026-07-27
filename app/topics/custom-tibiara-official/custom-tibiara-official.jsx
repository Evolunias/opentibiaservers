import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-official');
}

export default function CustomTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-official" />;
}
