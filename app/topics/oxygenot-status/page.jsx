import OxygenotStatusKeywordPage, { generateMetadata } from './oxygenot-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotStatusKeywordPage />;
}
