import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-online');
}

export default function OldSchoolXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-online" />;
}
