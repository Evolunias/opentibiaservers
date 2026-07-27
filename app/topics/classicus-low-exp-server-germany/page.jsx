import ClassicusLowExpServerGermanyKeywordPage, { generateMetadata } from './classicus-low-exp-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusLowExpServerGermanyKeywordPage />;
}
