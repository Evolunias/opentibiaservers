import Classicus80HighExpServerKeywordPage, { generateMetadata } from './classicus-8-0-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80HighExpServerKeywordPage />;
}
