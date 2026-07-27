import Classicus11HighExpServerKeywordPage, { generateMetadata } from './classicus-11-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11HighExpServerKeywordPage />;
}
