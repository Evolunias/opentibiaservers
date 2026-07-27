import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-old-school');
}

export default function ForgottenServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-old-school" />;
}
