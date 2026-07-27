import Thaisot15LowExpServerKeywordPage, { generateMetadata } from './thaisot-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15LowExpServerKeywordPage />;
}
