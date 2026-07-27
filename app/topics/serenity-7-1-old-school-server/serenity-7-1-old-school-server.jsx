import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-1-old-school-server');
}

export default function Serenity71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-1-old-school-server" />;
}
