import LowExpTibiaraServerKeywordPage, { generateMetadata } from './low-exp-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpTibiaraServerKeywordPage />;
}
