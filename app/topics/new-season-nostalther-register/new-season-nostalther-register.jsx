import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-register');
}

export default function NewSeasonNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-register" />;
}
