import LowExpTibiantisServerKeywordPage, { generateMetadata } from './low-exp-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpTibiantisServerKeywordPage />;
}
