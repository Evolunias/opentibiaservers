import Thaisot80LowExpServerKeywordPage, { generateMetadata } from './thaisot-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot80LowExpServerKeywordPage />;
}
