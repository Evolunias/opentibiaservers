import ClassicusClientKeywordPage, { generateMetadata } from './classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusClientKeywordPage />;
}
