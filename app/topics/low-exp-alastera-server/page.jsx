import LowExpAlasteraServerKeywordPage, { generateMetadata } from './low-exp-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpAlasteraServerKeywordPage />;
}
