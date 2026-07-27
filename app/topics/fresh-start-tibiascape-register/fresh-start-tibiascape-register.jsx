import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-register');
}

export default function FreshStartTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-register" />;
}
