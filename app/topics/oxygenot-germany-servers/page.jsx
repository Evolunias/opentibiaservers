import OxygenotGermanyServersKeywordPage, { generateMetadata } from './oxygenot-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotGermanyServersKeywordPage />;
}
