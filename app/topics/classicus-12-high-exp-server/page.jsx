import Classicus12HighExpServerKeywordPage, { generateMetadata } from './classicus-12-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12HighExpServerKeywordPage />;
}
