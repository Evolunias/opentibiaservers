import OxygenotEuropeServerKeywordPage, { generateMetadata } from './oxygenot-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotEuropeServerKeywordPage />;
}
