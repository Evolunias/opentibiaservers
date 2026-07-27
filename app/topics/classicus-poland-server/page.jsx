import ClassicusPolandServerKeywordPage, { generateMetadata } from './classicus-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusPolandServerKeywordPage />;
}
