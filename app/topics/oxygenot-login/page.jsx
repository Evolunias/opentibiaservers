import OxygenotLoginKeywordPage, { generateMetadata } from './oxygenot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotLoginKeywordPage />;
}
