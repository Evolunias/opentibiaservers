import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-54-old-school-server');
}

export default function Serenity854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-54-old-school-server" />;
}
