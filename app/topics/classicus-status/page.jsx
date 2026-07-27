import ClassicusStatusKeywordPage, { generateMetadata } from './classicus-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusStatusKeywordPage />;
}
