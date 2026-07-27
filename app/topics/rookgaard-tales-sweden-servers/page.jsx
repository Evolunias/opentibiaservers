import RookgaardTalesSwedenServersKeywordPage, { generateMetadata } from './rookgaard-tales-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesSwedenServersKeywordPage />;
}
