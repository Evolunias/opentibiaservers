import Classicus71LowExpServerKeywordPage, { generateMetadata } from './classicus-7-1-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71LowExpServerKeywordPage />;
}
