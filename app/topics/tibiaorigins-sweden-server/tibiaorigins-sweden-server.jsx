import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-sweden-server');
}

export default function TibiaoriginsSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-sweden-server" />;
}
