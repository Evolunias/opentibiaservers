import OxygenotSwedenServerKeywordPage, { generateMetadata } from './oxygenot-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotSwedenServerKeywordPage />;
}
