import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-login');
}

export default function NewSeasonNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-login" />;
}
