import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-14-old-school-server');
}

export default function Serenity14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-14-old-school-server" />;
}
