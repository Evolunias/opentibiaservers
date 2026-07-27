import Classicus76LowExpServerKeywordPage, { generateMetadata } from './classicus-7-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus76LowExpServerKeywordPage />;
}
