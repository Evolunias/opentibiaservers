import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-register');
}

export default function NewTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-register" />;
}
