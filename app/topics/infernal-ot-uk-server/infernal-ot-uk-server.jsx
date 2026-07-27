import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-uk-server');
}

export default function InfernalOtUkServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-uk-server" />;
}
