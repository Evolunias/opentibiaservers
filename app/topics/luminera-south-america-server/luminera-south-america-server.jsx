import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-south-america-server');
}

export default function LumineraSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-south-america-server" />;
}
