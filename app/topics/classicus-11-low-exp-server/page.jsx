import Classicus11LowExpServerKeywordPage, { generateMetadata } from './classicus-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11LowExpServerKeywordPage />;
}
