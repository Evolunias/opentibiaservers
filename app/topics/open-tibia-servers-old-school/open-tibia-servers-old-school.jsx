import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-old-school');
}

export default function OpenTibiaServersOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-old-school" />;
}
