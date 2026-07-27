import Classicus13HighExpServerKeywordPage, { generateMetadata } from './classicus-13-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13HighExpServerKeywordPage />;
}
