import HighExpTibijkaServerKeywordPage, { generateMetadata } from './high-exp-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpTibijkaServerKeywordPage />;
}
