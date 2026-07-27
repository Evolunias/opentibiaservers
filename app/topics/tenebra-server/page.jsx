import TenebraServerKeywordPage, { generateMetadata } from './tenebra-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TenebraServerKeywordPage />;
}
