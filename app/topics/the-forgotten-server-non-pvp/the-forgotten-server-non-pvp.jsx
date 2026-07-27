import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-non-pvp');
}

export default function TheForgottenServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-non-pvp" />;
}
