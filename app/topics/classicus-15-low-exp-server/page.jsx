import Classicus15LowExpServerKeywordPage, { generateMetadata } from './classicus-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15LowExpServerKeywordPage />;
}
