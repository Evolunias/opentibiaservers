import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-register');
}

export default function NewSeasonDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-register" />;
}
