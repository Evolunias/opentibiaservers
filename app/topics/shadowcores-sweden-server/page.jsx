import ShadowcoresSwedenServerKeywordPage, { generateMetadata } from './shadowcores-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresSwedenServerKeywordPage />;
}
