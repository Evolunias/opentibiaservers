import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-uk-server');
}

export default function SabrehavenUkServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-uk-server" />;
}
