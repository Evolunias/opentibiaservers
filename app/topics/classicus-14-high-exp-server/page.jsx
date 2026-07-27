import Classicus14HighExpServerKeywordPage, { generateMetadata } from './classicus-14-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14HighExpServerKeywordPage />;
}
