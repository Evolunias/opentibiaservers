import Classicus12LowExpServerKeywordPage, { generateMetadata } from './classicus-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12LowExpServerKeywordPage />;
}
