import Thaisot14LowExpServerKeywordPage, { generateMetadata } from './thaisot-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14LowExpServerKeywordPage />;
}
