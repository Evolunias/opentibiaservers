import ClassicusSwedenServerKeywordPage, { generateMetadata } from './classicus-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusSwedenServerKeywordPage />;
}
