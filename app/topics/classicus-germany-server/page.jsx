import ClassicusGermanyServerKeywordPage, { generateMetadata } from './classicus-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusGermanyServerKeywordPage />;
}
