import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-south-america-server');
}

export default function UnlineSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="unline-south-america-server" />;
}
