import Classicus81LowExpServerKeywordPage, { generateMetadata } from './classicus-8-1-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81LowExpServerKeywordPage />;
}
