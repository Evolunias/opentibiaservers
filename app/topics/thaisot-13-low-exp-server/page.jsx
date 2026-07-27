import Thaisot13LowExpServerKeywordPage, { generateMetadata } from './thaisot-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13LowExpServerKeywordPage />;
}
