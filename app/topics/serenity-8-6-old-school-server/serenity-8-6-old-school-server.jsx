import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-6-old-school-server');
}

export default function Serenity86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-6-old-school-server" />;
}
