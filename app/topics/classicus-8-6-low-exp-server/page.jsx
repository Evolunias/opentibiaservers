import Classicus86LowExpServerKeywordPage, { generateMetadata } from './classicus-8-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus86LowExpServerKeywordPage />;
}
