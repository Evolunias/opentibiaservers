import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-12-old-school-server');
}

export default function Serenity12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-12-old-school-server" />;
}
