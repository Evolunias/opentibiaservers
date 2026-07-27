import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-old-school');
}

export default function TheForgottenServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-old-school" />;
}
