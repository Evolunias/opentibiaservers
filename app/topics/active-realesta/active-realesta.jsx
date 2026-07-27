import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta');
}

export default function ActiveRealestaKeywordPage() {
  return <StaticKeywordPage slug="active-realesta" />;
}
