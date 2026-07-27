import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-old-school');
}

export default function OpenTibiaServerListOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-old-school" />;
}
