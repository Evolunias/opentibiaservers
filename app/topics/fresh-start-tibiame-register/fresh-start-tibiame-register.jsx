import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-register');
}

export default function FreshStartTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-register" />;
}
