import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-south-america-server');
}

export default function MadnessaliveSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-south-america-server" />;
}
