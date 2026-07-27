import Classicus13LowExpServerKeywordPage, { generateMetadata } from './classicus-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13LowExpServerKeywordPage />;
}
