import Classicus74LowExpServerKeywordPage, { generateMetadata } from './classicus-7-4-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus74LowExpServerKeywordPage />;
}
