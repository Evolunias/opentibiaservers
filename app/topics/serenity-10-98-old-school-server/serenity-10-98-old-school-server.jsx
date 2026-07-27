import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-98-old-school-server');
}

export default function Serenity1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-98-old-school-server" />;
}
