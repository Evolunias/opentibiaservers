import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-register');
}

export default function FreshStartTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-register" />;
}
