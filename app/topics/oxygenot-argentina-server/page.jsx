import OxygenotArgentinaServerKeywordPage, { generateMetadata } from './oxygenot-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotArgentinaServerKeywordPage />;
}
