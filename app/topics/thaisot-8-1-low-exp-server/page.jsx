import Thaisot81LowExpServerKeywordPage, { generateMetadata } from './thaisot-8-1-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot81LowExpServerKeywordPage />;
}
