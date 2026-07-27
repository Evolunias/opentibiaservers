import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-uk-servers');
}

export default function SerenityUkServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-uk-servers" />;
}
