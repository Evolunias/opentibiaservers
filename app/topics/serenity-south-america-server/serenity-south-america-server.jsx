import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-south-america-server');
}

export default function SerenitySouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-south-america-server" />;
}
