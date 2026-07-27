import Classicus100LowExpServerKeywordPage, { generateMetadata } from './classicus-10-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100LowExpServerKeywordPage />;
}
