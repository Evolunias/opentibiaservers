import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-uk-server');
}

export default function SerenityUkServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-uk-server" />;
}
