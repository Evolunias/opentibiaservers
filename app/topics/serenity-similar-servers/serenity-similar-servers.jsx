import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-similar-servers');
}

export default function SerenitySimilarServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-similar-servers" />;
}
