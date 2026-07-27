import LowExpClassicusServerKeywordPage, { generateMetadata } from './low-exp-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpClassicusServerKeywordPage />;
}
