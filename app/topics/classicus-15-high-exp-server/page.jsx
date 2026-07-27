import Classicus15HighExpServerKeywordPage, { generateMetadata } from './classicus-15-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15HighExpServerKeywordPage />;
}
