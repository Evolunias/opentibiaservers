import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-fresh-start-server');
}

export default function Luminera96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-fresh-start-server" />;
}
