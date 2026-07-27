import Classicus1098LowExpServerKeywordPage, { generateMetadata } from './classicus-10-98-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus1098LowExpServerKeywordPage />;
}
