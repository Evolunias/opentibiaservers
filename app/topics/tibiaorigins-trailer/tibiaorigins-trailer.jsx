import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-trailer');
}

export default function TibiaoriginsTrailerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-trailer" />;
}
