import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-uk-servers');
}

export default function SabrehavenUkServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-uk-servers" />;
}
