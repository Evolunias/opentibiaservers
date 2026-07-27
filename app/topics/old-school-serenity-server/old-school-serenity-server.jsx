import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-server');
}

export default function OldSchoolSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-server" />;
}
