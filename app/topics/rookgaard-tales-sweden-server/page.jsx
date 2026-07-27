import RookgaardTalesSwedenServerKeywordPage, { generateMetadata } from './rookgaard-tales-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesSwedenServerKeywordPage />;
}
