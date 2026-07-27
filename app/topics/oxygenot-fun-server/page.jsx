import OxygenotFunServerKeywordPage, { generateMetadata } from './oxygenot-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotFunServerKeywordPage />;
}
