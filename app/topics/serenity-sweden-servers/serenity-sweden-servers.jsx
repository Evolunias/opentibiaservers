import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-sweden-servers');
}

export default function SerenitySwedenServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-sweden-servers" />;
}
