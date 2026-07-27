import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-server');
}

export default function TopMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-server" />;
}
