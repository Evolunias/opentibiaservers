import TibiaoriginsSwedenServersKeywordPage, { generateMetadata } from './tibiaorigins-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsSwedenServersKeywordPage />;
}
