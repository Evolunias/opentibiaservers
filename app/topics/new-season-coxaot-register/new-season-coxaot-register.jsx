import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-register');
}

export default function NewSeasonCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-register" />;
}
