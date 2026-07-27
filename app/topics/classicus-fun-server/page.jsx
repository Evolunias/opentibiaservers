import ClassicusFunServerKeywordPage, { generateMetadata } from './classicus-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusFunServerKeywordPage />;
}
