import OxygenotServerKeywordPage, { generateMetadata } from './oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotServerKeywordPage />;
}
