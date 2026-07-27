import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-9-6-old-school-server');
}

export default function Serenity96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-9-6-old-school-server" />;
}
