import Thaisot12LowExpServerKeywordPage, { generateMetadata } from './thaisot-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot12LowExpServerKeywordPage />;
}
