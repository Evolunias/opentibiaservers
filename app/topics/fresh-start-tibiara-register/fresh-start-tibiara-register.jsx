import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-register');
}

export default function FreshStartTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-register" />;
}
