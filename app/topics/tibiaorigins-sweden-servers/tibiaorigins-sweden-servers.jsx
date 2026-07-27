import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-sweden-servers');
}

export default function TibiaoriginsSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-sweden-servers" />;
}
