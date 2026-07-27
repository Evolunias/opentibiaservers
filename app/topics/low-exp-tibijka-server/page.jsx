import LowExpTibijkaServerKeywordPage, { generateMetadata } from './low-exp-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpTibijkaServerKeywordPage />;
}
