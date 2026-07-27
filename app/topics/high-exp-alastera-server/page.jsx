import HighExpAlasteraServerKeywordPage, { generateMetadata } from './high-exp-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpAlasteraServerKeywordPage />;
}
