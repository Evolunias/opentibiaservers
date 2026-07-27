import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-old-school-tibia-server');
}

export default function BestOldSchoolTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="best-old-school-tibia-server" />;
}
