import ClassicusLowExpServerPolandKeywordPage, { generateMetadata } from './classicus-low-exp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusLowExpServerPolandKeywordPage />;
}
