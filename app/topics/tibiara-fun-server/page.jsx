import TibiaraFunServerKeywordPage, { generateMetadata } from './tibiara-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraFunServerKeywordPage />;
}
