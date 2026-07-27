import Classicus14LowExpServerKeywordPage, { generateMetadata } from './classicus-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14LowExpServerKeywordPage />;
}
