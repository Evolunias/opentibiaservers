import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-south-america-servers');
}

export default function SerenitySouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-south-america-servers" />;
}
