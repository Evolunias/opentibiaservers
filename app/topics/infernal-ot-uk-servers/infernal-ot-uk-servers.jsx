import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-uk-servers');
}

export default function InfernalOtUkServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-uk-servers" />;
}
