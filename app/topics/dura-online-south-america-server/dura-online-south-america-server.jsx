import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-south-america-server');
}

export default function DuraOnlineSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-south-america-server" />;
}
