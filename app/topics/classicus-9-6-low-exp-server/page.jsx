import Classicus96LowExpServerKeywordPage, { generateMetadata } from './classicus-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus96LowExpServerKeywordPage />;
}
