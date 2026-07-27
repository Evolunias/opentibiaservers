import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-sweden-server');
}

export default function SerenitySwedenServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-sweden-server" />;
}
