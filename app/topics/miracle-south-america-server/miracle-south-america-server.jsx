import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-south-america-server');
}

export default function MiracleSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-south-america-server" />;
}
