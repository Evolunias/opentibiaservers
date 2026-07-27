import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-south-america-server');
}

export default function MistOfDeathSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-south-america-server" />;
}
