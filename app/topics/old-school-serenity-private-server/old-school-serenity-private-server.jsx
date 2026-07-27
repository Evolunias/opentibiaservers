import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-private-server');
}

export default function OldSchoolSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-private-server" />;
}
