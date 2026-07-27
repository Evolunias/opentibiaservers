import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-0-old-school-server');
}

export default function Serenity80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-0-old-school-server" />;
}
