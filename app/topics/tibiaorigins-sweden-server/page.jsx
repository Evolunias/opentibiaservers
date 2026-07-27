import TibiaoriginsSwedenServerKeywordPage, { generateMetadata } from './tibiaorigins-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsSwedenServerKeywordPage />;
}
