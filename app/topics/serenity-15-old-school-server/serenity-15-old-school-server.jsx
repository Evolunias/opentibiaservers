import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-old-school-server');
}

export default function Serenity15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-old-school-server" />;
}
