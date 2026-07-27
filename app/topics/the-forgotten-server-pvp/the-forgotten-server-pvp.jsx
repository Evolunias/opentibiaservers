import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-pvp');
}

export default function TheForgottenServerPvpKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-pvp" />;
}
