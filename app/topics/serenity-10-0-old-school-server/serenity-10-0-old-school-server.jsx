import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-old-school-server');
}

export default function Serenity100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-old-school-server" />;
}
