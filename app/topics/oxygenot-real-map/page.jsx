import OxygenotRealMapKeywordPage, { generateMetadata } from './oxygenot-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotRealMapKeywordPage />;
}
