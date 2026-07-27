import Thaisot11HighExpServerKeywordPage, { generateMetadata } from './thaisot-11-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11HighExpServerKeywordPage />;
}
