import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-official');
}

export default function ActiveTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-official" />;
}
