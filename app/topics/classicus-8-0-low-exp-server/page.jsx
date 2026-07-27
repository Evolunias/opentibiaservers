import Classicus80LowExpServerKeywordPage, { generateMetadata } from './classicus-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80LowExpServerKeywordPage />;
}
