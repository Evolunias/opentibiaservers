import Thaisot13HighExpServerKeywordPage, { generateMetadata } from './thaisot-13-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13HighExpServerKeywordPage />;
}
